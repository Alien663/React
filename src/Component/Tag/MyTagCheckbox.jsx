import { useState } from "react"
import Badge from "react-bootstrap/Badge"

const MyTagCheckbox = ({ checked, label, children, ...props }) => {
  const [isCheck, setIsCheck] = useState(checked)

  return (
    <Badge
      bg="none"
      pill
      className={[isCheck ? "my-tag-green" : "my-tag-gray", "my-tag", "my-tag-hover"]}
      onClick={() => { setIsCheck(!isCheck) }}
      {...props}
    >
      {label}
      {children}
    </Badge>
  )
}
export default MyTagCheckbox