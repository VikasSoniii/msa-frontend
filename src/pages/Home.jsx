import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">🚀 MSA Frontend</h1>
        <p className="text-gray-600 mb-8">
          Welcome to the Microservices App. Choose an action below:
        </p>

        <nav className="flex flex-col gap-4">
          <Link
            to="/orders"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            📦 View Orders
          </Link>
          <Link
            to="/orders/new"
            className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200 shadow-md"
          >
            ➕ Create New Order
          </Link>
        </nav>
      </div>
    </div>
  );
}