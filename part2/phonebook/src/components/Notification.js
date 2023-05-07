const Notification = ({ message }) => {
  if (message === {}) {
    return null
  }
else {
  return (
    <div className={`notification ${message.className}`}>
      {message.content}
    </div>
  )}
}

export default Notification