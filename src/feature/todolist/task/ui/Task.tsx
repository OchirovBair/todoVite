import { EditableSpan } from '@/common/components'
import { TaskStatus } from '@/common/enums'
import { DeleteOutlined } from '@ant-design/icons'
import { Checkbox } from 'antd'
import { Button } from 'antd'

import s from './Task.module.scss'

type DomainTask = {
  status: TaskStatus
  title: string
}

type Props = {
  task: DomainTask
}

export const Task = ({ task }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.editSection}>
        <Checkbox checked={task.status === TaskStatus.Completed} />
        <EditableSpan disabled={false} onChangeTitle={() => {}} title={task.title} />
      </div>
      <Button>
        <DeleteOutlined />
      </Button>
    </div>
  )
}
