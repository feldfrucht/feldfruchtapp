import React, { useState, useCallback, useRef } from 'react'


const SwipeableListItem = ({children, onSwipe, threshold=0.5}) => {

    // DOM Refs
    let wrapper = null;
    let background = null;

    // Drag & Drop
    let dragStartX = 0;
    const [left, setLeft] = useState(0);
    let dragged = useRef(false);

    let offsetWidth = 300;


    const onDragStartMouse = (evt) => {
        onDragStart(evt.clientX);
        window.addEventListener("mousemove", onMouseMove);
    };
    
    const onDragStartTouch = (evt) => {
        const touch = evt.targetTouches[0];
        onDragStart(touch.clientX);
        window.addEventListener("touchmove", onTouchMove);
    };

    const onDragStart = (clientX) => {
        dragged.current = true;
        dragStartX = clientX;
    };

    const onMouseMove = useCallback((evt) => {
        let leftNew = evt.clientX - dragStartX;
        if (leftNew > 0) {
            leftNew = 0;
        }
        setLeft(leftNew);
    },[dragStartX])
    

    const onTouchMove = useCallback((evt) => {
        const touch = evt.targetTouches[0];
        let leftNew = touch.clientX - dragStartX;
        if (leftNew > 0) {
            leftNew = 0;
        }
        setLeft(leftNew);
    },[dragStartX])


    const onSwiped = useCallback(() => {
        if (onSwipe) {
            onSwipe();
        }
    },[onSwipe])

    const onDragEnd = useCallback((offsetWidth) => {
        if (dragged.current){
            
            if (left < offsetWidth * threshold * -1) {
                //setLeft(-offsetWidth * 2);
                onSwiped();
                setLeft(0);
                dragged.current = false;
            } else {
                setLeft(0);
                dragged.current = false;
            }
        }
    },[left, onSwiped, threshold])

    const onDragEndMouse = (evt, offsetWidth) => {
        window.removeEventListener("mousemove", onMouseMove);
        onDragEnd(offsetWidth);
        dragged.current = false;
    };
    
    const onDragEndTouch = (evt, offsetWidth) => {
        window.removeEventListener("touchmove", onTouchMove);
        onDragEnd(offsetWidth);
        dragged.current = false;
    };

    // styles
    const opacity = (Math.abs(left) / 100).toFixed(2);

    const backgroundStyle = {
        opacity: (opacity < 1)? opacity.toString(): "1"
    };

    const listElementStyle = {
        transform: `translateX(${left}px)`,
    };


    return( 
        <>
            <div className="swipeableList-wrapper" ref={div => (wrapper = div)} >
                <div className="swipeableList-background" ref={div => (background = div)}  style={backgroundStyle}>
                    <span>Delete</span>
                </div>
                <div 
                    id="swipeableList-listItem" 
                    onMouseDown={onDragStartMouse}
                    onTouchStart={onDragStartTouch}
                    onMouseUp={(e) => onDragEndMouse(e, offsetWidth)}
                    onTouchEnd={(e) => onDragEndTouch(e, offsetWidth)}
                    style={listElementStyle}
                >
                    {children}
                </div>
            </div>
        </>
      );
};

export default SwipeableListItem