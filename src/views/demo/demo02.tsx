import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age: number
}

interface IState {
  message: string
  address: string
}

class Demo02 extends PureComponent<IProps, IState> {
  state = {
    message: 'Hello React',
    address: '北京市'
  }
  // constructor(props: IProps) {
  //   super(props)

  //   this.state = {
  //     message: 'Hello React',
  //     address: '北京市'
  //   }
  // }
  render(): React.ReactNode {
    const { name, age } = this.props
    const { message, address } = this.state
    return (
      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{message}</h2>
        <h2>{address}</h2>
      </div>
    )
  }
}

export default Demo02
