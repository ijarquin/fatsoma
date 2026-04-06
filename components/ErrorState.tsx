export default function ErrorState({ message }: { message?: string }) {
  return (
    <div className="flex items-center justify-center h-64 text-destructive text-sm">
      {message ?? "Something went wrong. Please try again."}
    </div>
  );
}
