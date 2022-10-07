const ResultMessage = ({ messageType, children }) => {
  const messageStyle =
    messageType === "ok"
      ? "text-blue-500"
      : messageType === "error"
      ? "text-red-500"
      : "text-gray-900"

  return <div className={`${messageStyle}`}>{children}</div>
}

export default ResultMessage
