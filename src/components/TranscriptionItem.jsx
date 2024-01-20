export default function TranscriptionItem({
  item,
  handleStartTimeChange,
  handleEndTimeChange,
  handleContentChange,
}) {
  if (!item) {
    return "";
  }
  return (
    <div className="my-1 grid grid-cols-3 gap-1 items-center">
      <input
        type="text"
        className="bg-white/20 p-1 rounded-md border-2 border-white/20"
        value={item.start_time}
        onChange={handleStartTimeChange}
      />
      <input
        type="text"
        className="bg-white/20 p-1 rounded-md border-2 border-white/20"
        value={item.end_time}
        onChange={handleEndTimeChange}
      />
      <input
        type="text"
        className="bg-white/20 p-1 rounded-md border-2 border-white/20"
        value={item.content}
        onChange={handleContentChange}
      />
    </div>
  );
}
