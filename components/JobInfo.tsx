function JobInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-x-2">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default JobInfo;
