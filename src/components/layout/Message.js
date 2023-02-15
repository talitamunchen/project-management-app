import "./Message.css"
import { useState, useEffect } from "react"

function Message(props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!props.msg) {
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [props.msg])

  return (
    <>
      {visible && (
        <div
          className={`message ${props.type}`}
          data-testid="message-container"
        >
          <p>{props.msg}</p>
        </div>
      )}
    </>
  )
}

export default Message
