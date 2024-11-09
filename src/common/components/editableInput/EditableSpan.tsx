import { ChangeEvent, MouseEventHandler, useState } from 'react'

import { Input } from 'antd'
type Props = {
  task: string
}
export const EditableInput = ({ task }: Props) => {
  const [value, setValue] = useState<string>()
  const [isEdit, setIsEdit] = useState<boolean>(false)

  function onChangeInputValue(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }
  function onDClick() {
    setIsEdit(true)
  }

  return (
    <div>
      {isEdit ? (
        <span onDoubleClick={onDClick}>{task}</span>
      ) : (
        <Input onChange={onChangeInputValue} value={value} />
      )}
    </div>
  )
}
