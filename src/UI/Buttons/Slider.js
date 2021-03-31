import React, { useState } from 'react';
import { useMousePosition } from '../../Utils/useMousePosition';
import useWindowDimensions from '../../Utils/useWindowDimensions';


const Slider = ({ min, max, value1, value2, unit, title}) => {

    const inputsRy = {
        sliderWidthVW: 80,
        minRange: parseFloat(min),
        maxRange: parseFloat(max), 
        outputWidth: 30, // output width
        thumbWidth: 20, // thumb width
        thumbBorderWidth: -1,
        trackHeight: 5,
        theValue: [value1, value2] // theValue[0] < theValue[1]
    };
      
      var sliderWidthPX= Math.round(inputsRy.sliderWidthVW/100*useWindowDimensions().width);

      var range = inputsRy.maxRange - inputsRy.minRange;
      var rangeK = sliderWidthPX / range;
      var thumbRealWidth = inputsRy.thumbWidth + 2 * inputsRy.thumbBorderWidth;

      const [sliderPaddingLeft, setSliderPaddingLeft] = useState((inputsRy.theValue[0] - inputsRy.minRange) * rangeK);
      const [sliderPaddingRight, setSliderPaddingRight] = useState(sliderWidthPX - inputsRy.theValue[1] * rangeK);
      const [trackWidth, setTrackWidth] = useState(inputsRy.theValue[1] * rangeK - inputsRy.theValue[0] * rangeK);

      // styles
      const sliderStyle = {
        height: inputsRy.trackHeight + "px",
        width: sliderWidthPX + "px",
        paddingLeft: sliderPaddingLeft + "px",
        paddingRight: sliderPaddingRight + "px"
      };

      const trackStyle ={
        width: trackWidth + "px"
      };

      const [thumbLeft1, setThumbLeft1] = useState((inputsRy.theValue[0] - inputsRy.minRange) * rangeK - (thumbRealWidth / 2));
      const [thumbLeft2, setThumbLeft2] = useState((inputsRy.theValue[1] - inputsRy.minRange) * rangeK - (thumbRealWidth / 2));

      const [outputLeft1, setOutputLeft1] = useState((inputsRy.theValue[0] - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2);
      const [outputLeft2, setOutputLeft2] = useState((inputsRy.theValue[1] - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2);

      const thumbStyle1 ={
        width: inputsRy.thumbWidth + "px",
        height: inputsRy.thumbWidth + "px",
        borderWidth: inputsRy.thumbBorderWidth + "px",
        top: -(inputsRy.thumbWidth/2  - inputsRy.trackHeight/2 ) + "px",
        left:  thumbLeft1 + "px"
      };

      const thumbStyle2 ={
        width: inputsRy.thumbWidth + "px",
        height: inputsRy.thumbWidth + "px",
        borderWidth: inputsRy.thumbBorderWidth + "px",
        top: -(inputsRy.thumbWidth / 2  - inputsRy.trackHeight/2) + "px",
        left: thumbLeft2 + "px"
      };
      
      const outputStyle1 = {
        width: inputsRy.outputWidth + "px",
        height: inputsRy.outputWidth + "px",
        lineHeight: inputsRy.outputWidth + "px",

        top: ( inputsRy.thumbWidth/2 - inputsRy.trackHeight / 2) + "px",
        left: outputLeft1 + "px",
      };

      const outputStyle2 = {
        width: inputsRy.outputWidth + "px",
        height: inputsRy.outputWidth + "px",
        lineHeight: inputsRy.outputWidth + "px",

        top: (inputsRy.thumbWidth/2 - inputsRy.trackHeight / 2) + "px",
        left: outputLeft2 + "px",
      };
      
    // events

    const [dragging1, setDragging1] = useState(false);
    const [dragging2, setDragging2] = useState(false);

    const drag = (i) => {
        if (i === 0){
            setDragging1(!dragging1);
        } else if (i === 1){
            setDragging2(!dragging2);
        };
    };

    const [margin, setMargin]  = useState(0); 
    const position = useMousePosition();
    const newPosition = position.x-margin;

    const [theValue1, setTheValue1] = useState(inputsRy.theValue[0]);
    const [theValue2, setTheValue2] = useState(inputsRy.theValue[1]);

    const [labelValue1, setLabelValue1]= useState(inputsRy.theValue[0]);
    const [labelValue2, setLabelValue2]= useState(inputsRy.theValue[1]);

    //reset on resize
    window.addEventListener('resize', ()=> {
        setSliderPaddingLeft((inputsRy.theValue[0] - inputsRy.minRange) * rangeK);
        setSliderPaddingRight(sliderWidthPX - inputsRy.theValue[1] * rangeK);
        setTrackWidth(inputsRy.theValue[1] * rangeK - inputsRy.theValue[0] * rangeK);
        setThumbLeft1((inputsRy.theValue[0] - inputsRy.minRange) * rangeK - (thumbRealWidth / 2));
        setThumbLeft2((inputsRy.theValue[1] - inputsRy.minRange) * rangeK - (thumbRealWidth / 2));
        setOutputLeft1((inputsRy.theValue[0] - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2);
        setOutputLeft2((inputsRy.theValue[1] - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2);
        setTheValue1(inputsRy.theValue[0]);
        setTheValue2(inputsRy.theValue[1]);
        setLabelValue1(inputsRy.theValue[0]);
        setLabelValue2(inputsRy.theValue[1]);
    });
    
    const moveThumb = () =>{

        if (dragging1) {
            setTheValue1(Math.round(newPosition / rangeK) + inputsRy.minRange);
            if (theValue1 < theValue2  && theValue1 >= inputsRy.minRange) {
                setLabelValue1(theValue1);
                setThumbLeft1((theValue1 - inputsRy.minRange  ) * rangeK - (thumbRealWidth / 2));
                setOutputLeft1((theValue1 - inputsRy.minRange ) * rangeK - inputsRy.outputWidth / 2);
                setSliderPaddingLeft((theValue1 - inputsRy.minRange ) * rangeK);
                setTrackWidth((theValue2 - theValue1) * rangeK);
            };
        } else if (dragging2) {
            setTheValue2(Math.round(newPosition / rangeK) + inputsRy.minRange );
            if (theValue2 > theValue1 && theValue2 <= inputsRy.maxRange) {
                setLabelValue2(theValue2);
                setThumbLeft2((theValue2 - inputsRy.minRange) * rangeK - (thumbRealWidth / 2));
                setOutputLeft2((theValue2 - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2);
                setSliderPaddingRight((inputsRy.maxRange - theValue2) * rangeK);
                setTrackWidth((theValue2 - theValue1) * rangeK);
            };
            
        };
    };

    return(
        <div className="slider-area">
            <div className="slider-title">{title}</div>
            <div className="slider-container" onMouseMove={moveThumb} ref={el => {
                    if (!el) return;
                    setMargin(Math.round(el.getBoundingClientRect().left));
                    }}>
                <div className="slider" style={sliderStyle} >
                    <div className="slider-track" style={trackStyle}></div>
                </div>
                <div className="slider-output" style={outputStyle1}> 
                    <p>{ labelValue1 }</p>
                </div>
                <div className={(dragging1)?"slider-thumb slider-thumbFocused":"slider-thumb"} style={thumbStyle1} onClick={() => drag(0)} ></div>

                <div className="slider-output" style={outputStyle2}> 
                    <p>{ labelValue2 }</p>
                </div>
                <div className={(dragging2)?"slider-thumb slider-thumbFocused":"slider-thumb"} style={thumbStyle2} onClick={() => drag(1)} ></div>
            </div>
        </div>
        
    );
};
export default Slider;