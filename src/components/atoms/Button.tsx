export const PrimaryButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors" onClick={onClick}>
    {children}
  </button>
);