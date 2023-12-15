import { Badge } from "react-bootstrap"
import '../../Style/Tag.css'

const MyTag = ({ checked, label, children, ...props }) => {
  return (
    <Badge
      bg="none"
      pill
      className={[checked ? "my-tag-green" : "my-tag-gray", "my-tag"]}
      {...props}
    >
      {label}
      {children}
    </Badge>
  )
}
export default MyTag