import { Badge } from "react-bootstrap"
import '../../Style/Tag.css'

const MyTagInput = ({ onEnterPress, ...props }) => {
  return (
    <Badge
      bg="none"
      pill
      className={["my-tag-gray", "my-tag"]}
      {...props}
    >
      <input onKeyDown={(ev) => {
        if (ev.key === "Enter"){
          onEnterPress(ev.nativeEvent.target.value)
          ev.nativeEvent.target.value = ""
        }
      }} />
    </Badge>
  )
}
export default MyTagInput