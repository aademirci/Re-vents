import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer'
import TestPlaceInput from './TestPlaceInput'
import TestMap from './TestMap'
import { decrement, increment } from './testReducer'

const Sandbox = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.test.data)
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    }
    const [location, setLocation] = useState(defaultProps)

    const handleSetLocation = latLng => {
        setLocation({...location, center: {lat: latLng.lat, lng: latLng.lng}})
    }

    return (
        <Fragment>
            <h1>Testing 123</h1>
            <h3>The data is: {data}</h3>
            <Button content="Increment" color="green" onClick={() => dispatch(increment(8))} />
            <Button content="Decrement" color="red" onClick={() => dispatch(decrement(2))} />
            <Button content="Open Modal" color="teal" onClick={() => dispatch(openModal({modalType: 'TestModal', modalProps: {data}}))} />
            <div style={{marginTop: 15}}>
                <TestPlaceInput setLocation={handleSetLocation} />
                <TestMap location={location} />
            </div>
        </Fragment>
    )
}

export default Sandbox
