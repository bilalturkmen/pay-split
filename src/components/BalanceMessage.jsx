export function BalanceMessage({ balance, name }) {
  if (balance < 0) {
    return (
      <p className="text-red-600">
        You owe {name} ${Math.abs(balance)}
      </p>
    );
  }
  if (balance > 0) {
    return (
      <p className="text-emerald-600">
        {name} owes you ${Math.abs(balance)}
      </p>
    );
  }
  return <p>You and {name} are even</p>;
}
