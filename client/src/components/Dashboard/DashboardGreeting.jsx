function DashboardGreeting({ username }) {
  return (
    <p className="text-1xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
      Welcome {username} !
    </p>
  );
}

export default DashboardGreeting;
