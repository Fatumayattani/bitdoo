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
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-md w-full card-enhanced rounded-2xl shadow-2xl p-10 text-center animate-scale-in relative z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-green-100 rounded-full p-4 hover-glow animate-pulse-glow">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Loan Request Submitted!
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your loan request has been successfully submitted to the network. 
            Lenders will review your application and you'll be notified when funding is available.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="btn-primary w-full text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover-glow transition-all duration-300"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-100/20 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 relative z-10">
          <div className="animate-fade-in-down mb-6">
            <div className="hover-glow rounded-full p-3 w-fit mx-auto">
              <Bitcoin className="h-12 w-12 text-orange-600 animate-bitcoin-spin" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 animate-fade-in-up gradient-text">
            Request a Bitcoin Loan
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Fill out the form below to submit your loan request to the Bitdoo network
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Main Form */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <div className="card-enhanced shadow-2xl rounded-2xl p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Loan Amount */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Loan Amount (BTC)
                  </label>
                  <input
                    {...register('amount', { valueAsNumber: true })}
                    type="number"
                    step="0.001"
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300"
                    placeholder="0.100"
                  />
                  {errors.amount && (
                    <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
                  )}
                </div>

                {/* Loan Purpose */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Loan Purpose
                  </label>
                  <textarea
                    {...register('purpose')}
                    rows={4}
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Describe what you'll use this loan for..."
                  />
                  {errors.purpose && (
                    <p className="mt-1 text-sm text-red-600">{errors.purpose.message}</p>
                  )}
                </div>

                {/* Duration and Interest Rate */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Duration (months)
                    </label>
                    <input
                      {...register('duration', { valueAsNumber: true })}
                      type="number"
                      min="1"
                      max="24"
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300"
                    />
                    {errors.duration && (
                      <p className="mt-1 text-sm text-red-600">{errors.duration.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Interest Rate (% per year)
                    </label>
                    <input
                      {...register('interestRate', { valueAsNumber: true })}
                      type="number"
                      min="1"
                      max="25"
                      step="0.1"
                      className="form-input w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300"
                    />
                    {errors.interestRate && (
                      <p className="mt-1 text-sm text-red-600">{errors.interestRate.message}</p>
                    )}
                  </div>
                </div>

                {/* Repayment Schedule */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Repayment Schedule
                  </label>
                  <select
                    {...register('repaymentSchedule')}
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300"
                  >
                    <option value="monthly">Monthly Payments</option>
                    <option value="quarterly">Quarterly Payments</option>
                    <option value="lump-sum">Lump Sum at End</option>
                  </select>
                </div>

                {/* Collateral */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Collateral (Optional)
                  </label>
                  <textarea
                    {...register('collateral')}
                    rows={3}
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Describe any collateral you can offer..."
                  />
                </div>

                {/* Business Plan */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Business Plan (Optional)
                  </label>
                  <textarea
                    {...register('businessPlan')}
                    rows={4}
                    className="form-input w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Provide details about your business or income source..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-white py-4 px-6 rounded-xl font-semibold shadow-xl hover-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner w-5 h-5 mr-3"></div>
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
          <div className="space-y-6 animate-slide-in-right">
            {/* Loan Calculator */}
            <div className="card-enhanced shadow-xl rounded-2xl p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-2 rounded-lg mr-3">
                  <Calculator className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Loan Calculator</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount:</span>
                  <span className="font-bold text-orange-600">{watchedAmount || 0} BTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-bold">{watchedDuration || 0} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="font-bold">{watchedInterestRate || 0}% per year</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-bold bg-orange-50 p-3 rounded-lg">
                  <span>Total Repayment:</span>
                  <span className="gradient-text">{calculateRepayment().toFixed(4)} BTC</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-6 hover-lift">
              <div className="flex items-center mb-4">
                <div className="bg-orange-200 p-2 rounded-lg mr-3">
                  <Clock className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Tips for Success</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Be specific about your loan purpose
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Offer reasonable interest rates
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Provide collateral when possible
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Include a detailed business plan
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Start with smaller amounts to build reputation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanRequestPage;