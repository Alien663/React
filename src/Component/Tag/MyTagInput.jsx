import Badge from "react-bootstrap/Badge"
import Form from "react-bootstrap/Form"

import '../../Style/Tag.css'

const MyTagInput = ({ onEnterPress, ...props }) => {
  return (
    <Badge
      bg="none"
      pill
      className={["my-tag-gray", "my-tag"]}
      {...props}
    >
      <Form.Control
        type="text"
        style={{ maxHeight: "25px" }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            onEnterPress(ev.nativeEvent.target.value)
            ev.nativeEvent.target.value = ""
          }
        }} />
    </Badge>
  )
}
export default MyTagInput