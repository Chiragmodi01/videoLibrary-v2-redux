import React from 'react'
import './Navpills.css'
import StyledChip from '../../styledComps/StyledChip'

import {IoIosArrowBack} from 'react-icons/io';

function Navpills() {

  return (
    <div className='Navpills'>
      <div className="navpills-before-curtain no-display">
        <IoIosArrowBack className='icon-previous' size='1em' title="Previous"/>
      </div>
      <StyledChip active='true' className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
      <StyledChip className='chip'>Elon musk</StyledChip>
    </div>
  )
}

export default Navpills