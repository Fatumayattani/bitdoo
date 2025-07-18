import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bitcoin, Calculator, Clock, Shield, Loader2 } from 'lucide-react';

const loanRequestSchema = z.object({
  amount: z.number().min(0.001, 'Minimum loan amount is 0.001 BTC').max(1, 'Maximum loan amount is 1 BTC'),
  purpose: z.string().min(10, 'Please provide at least 10 characters describing the loan purpose'),
  duration: z.number().min(1, 'Minimum duration is 1 month').max(24, 'Maximum duration is 24 months'),
  interestRate: z.number().min(1, 'Minimum interest rate is 1%').max(25, 'Maximum interest rate is 25%'),
  collateral: z.string().optional(),
  repaymentSchedule: z.enum(['monthly', 'quarterly', 'lump-sum']),
  businessPlan: z.string().optional(),
});

type LoanRequestFormData = z.infer<typeof loanRequestSchema>;

const LoanRequestPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<LoanRequestFormData>({
    resolver: zodResolver(loanRequestSchema),
    defaultValues: {
      amount: 0.1,
      duration: 6,
      interestRate: 8,
      repaymentSchedule: 'monthly',
    },
  });

  const watchedAmount = watch('amount');
  const watchedDuration = watch('duration');
  const watchedInterestRate = watch('interestRate');

  const calculateRepayment = () => {
    if (!watchedAmount || !watchedDuration || !watchedInterestRate) return 0;
    const monthlyRate = watchedInterestRate / 100 / 12;
    const totalAmount = watchedAmount * (1 + (watchedInterestRate / 100) * (watchedDuration / 12));
    return totalAmount;
  };

  const onSubmit = async (data: LoanRequestFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with actual ICP smart contract call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Loan request submitted:', data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Failed to submit loan request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Loan Request Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Your loan request has been successfully submitted to the network. 
            Lenders will review your application and you'll be notified when funding is available.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Bitcoin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Request a Bitcoin Loan
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to submit your loan request to the Bitdoo network
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Loan Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount (BTC)
                  </label>
                  <input
                    {...register('amount', { valueAsNumber: true })}
                    type="number"
                    step="0.001"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    placeholder="0.100"
                  />
                  {errors.amount && (
                    <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
                  )}
                </div>

                {/* Loan Purpose */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Purpose
                  </label>
                  <textarea
                    {...register('purpose')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Describe what you'll use this loan for..."
                  />
                  {errors.purpose && (
                    <p className="mt-1 text-sm text-red-600">{errors.purpose.message}</p>
                  )}
                </div>

                {/* Duration and Interest Rate */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration (months)
                    </label>
                    <input
                      {...register('duration', { valueAsNumber: true })}
                      type="number"
                      min="1"
                      max="24"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                    {errors.duration && (
                      <p className="mt-1 text-sm text-red-600">{errors.duration.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interest Rate (% per year)
                    </label>
                    <input
                      {...register('interestRate', { valueAsNumber: true })}
                      type="number"
                      min="1"
                      max="25"
                      step="0.1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                    {errors.interestRate && (
                      <p className="mt-1 text-sm text-red-600">{errors.interestRate.message}</p>
                    )}
                  </div>
                </div>

                {/* Repayment Schedule */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Repayment Schedule
                  </label>
                  <select
                    {...register('repaymentSchedule')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="monthly">Monthly Payments</option>
                    <option value="quarterly">Quarterly Payments</option>
                    <option value="lump-sum">Lump Sum at End</option>
                  </select>
                </div>

                {/* Collateral */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Collateral (Optional)
                  </label>
                  <textarea
                    {...register('collateral')}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Describe any collateral you can offer..."
                  />
                </div>

                {/* Business Plan */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Plan (Optional)
                  </label>
                  <textarea
                    {...register('businessPlan')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Provide details about your business or income source..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                        Submitting Request...
                      </>
                    ) : (
                      'Submit Loan Request'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Loan Calculator */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calculator className="h-6 w-6 text-orange-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Loan Calculator</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount:</span>
                  <span className="font-medium">{watchedAmount || 0} BTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{watchedDuration || 0} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="font-medium">{watchedInterestRate || 0}% per year</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Repayment:</span>
                  <span className="text-orange-600">{calculateRepayment().toFixed(4)} BTC</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-orange-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Tips for Success</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Be specific about your loan purpose</li>
                <li>• Offer reasonable interest rates</li>
                <li>• Provide collateral when possible</li>
                <li>• Include a detailed business plan</li>
                <li>• Start with smaller amounts to build reputation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanRequestPage;