import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer'
import { decrement, increment } from './testReducer'

const Sandbox = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.test.data)

    return (
        <Fragment>
            <h1>Testing 123</h1>
            <h3>The data is: {data}</h3>
            <Button content="Increment" color="green" onClick={() => dispatch(increment(8))} />
            <Button content="Decrement" color="red" onClick={() => dispatch(decrement(2))} />
            <Button content="Open Modal" color="teal" onClick={() => dispatch(openModal({modalType: 'TestModal', modalProps: {data}}))} />
        </Fragment>
    )
}

export default Sandbox
