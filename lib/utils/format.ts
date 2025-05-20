// Utility functions for formatting values in the application

// Format Bitcoin amount with appropriate units (BTC, mBTC, sats)
export function formatBitcoin(amount: number): string {
  if (amount >= 0.01) {
    return `${amount.toFixed(8)} BTC`;
  } else if (amount >= 0.00001) {
    return `${(amount * 1000).toFixed(5)} mBTC`;
  } else {
    return `${Math.round(amount * 100000000)} sats`;
  }
}

// Format a date for display
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// Format a date with time for display
export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Calculate duration between two dates in a human-readable format
export function formatDuration(start: Date, end: Date | null = null): string {
  const endTime = end || new Date();
  const durationMs = endTime.getTime() - start.getTime();
  
  const seconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days}d ${hours % 24}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes % 60}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${seconds}s`;
  }
}

// Format a bitcoin rate into readable format
export function formatBitcoinRate(ratePerMinute: number): string {
  const hourlyRate = ratePerMinute * 60;
  
  if (hourlyRate >= 0.001) {
    return `${hourlyRate.toFixed(6)} BTC/hr`;
  } else {
    return `${Math.round(hourlyRate * 100000000)} sats/hr`;
  }
}

// Shorten a Lightning or Bitcoin address
export function shortenAddress(address: string, chars: number = 6): string {
  if (!address || address.length < chars * 2) return address;
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
}