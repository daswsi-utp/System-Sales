
export default function OrdersLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
    );
  }