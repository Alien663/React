import { useState } from "react"
import CloseButton from "react-bootstrap/CloseButton"

import MyTag from "../../Component/Tag/MyTag"
import MyTagCheckbox from "../../Component/Tag/MyTagCheckbox"
import MyTagInput from "../../Component/Tag/MyTagInput"

const Tags = () => {
  const [data, setData] = useState(["Tag 1", "Tag 2", "Tag 3", "Tag 4"])

  const handleRemoveTag = (tagname) => {
    setData(data.filter((item, idx) => idx !== data.findIndex(item => item === tagname)))
  }

  const handleAddTag = (value) => {
    setData([...data, value])
  }

  return (
    <>
      <br></br>
      <div style={{
        border: "solid",
        borderColor: "#6FF1FA",
      }}>
        <br></br>
        <h2>Basic Tag</h2>
        {
          data.map((item, idx) => (<MyTag checked={idx % 2 === 0} label={item}></MyTag>))
        }
      </div>
      <br></br>
      <div style={{
        border: "solid",
        borderColor: "#6FF1FA",
      }}>
        <br></br>
        <h2>Checkbox Tag</h2>
        {
          data.map((item, idx) => (<MyTagCheckbox checked={idx % 2 === 0} label={item}></MyTagCheckbox>))
        }
      </div>
      <br></br>
      <div style={{
        border: "solid",
        borderColor: "#6FF1FA",
      }}>
        <br></br>
        <h2>Add and Remove Tag</h2>
        {
          data.map((item, idx) => (
            <MyTag
              checked={idx % 2 === 0}
              label={item}
              children={<CloseButton
                variant="white"
                style={{ marginLeft: "5px", fontSize: "15px" }}
                onClick={() => {handleRemoveTag(item)}}
              />
              }>
            </MyTag>
          ))
        }
        <MyTagInput onEnterPress={handleAddTag}></MyTagInput>
      </div>
    </>
  )
}
export default Tags