import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DaysRangeForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState = () => {
    return {
      from: null,
      to: null,
      enteredTo: null
    }
  }

  isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from)
    const isRangeSelected = from && to
    return !from || isBeforeFirstDay || isRangeSelected
  }

  handleDayClick = (day) => {
    const { from, to } = this.state
    if (from && to && day >= from && day <= to) {
      this.handleResetClick()
      return
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null
      })
    } else {
      this.setState({
        to: day,
        enteredTo: day
      })
    }
  }

  handleDayMouseEnter = (day) => {
    const { from, to } = this.state
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day
      })
    }
  }

  handleResetClick = () => {
    this.setState(this.getInitialState())
  }

  render() {
    const { from, to, enteredTo } = this.state
    const modifiers = { start: from, end: enteredTo }
    const disabledDays = { before: this.state.from }
    const selectedDays = [from, { from, to: enteredTo }]

    return (
      <div className="days-range-form">
        <div>
          {!from && !to && 'Пожалуйста, выберите первый день.'}
          {from && !to && 'Пожалуйста, выберите последний день.'}
          {from &&
            to &&
            `Выбрано от ${from.toLocaleDateString()} до ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && <button onClick={this.handleResetClick}>Сбросить</button>}
        </div>
        <DayPicker
          className="Range"
          numberOfMonths={2}
          fromMonth={from}
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
        />
        <Helmet>
          <style>{`
					  .Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
					    background-color: #f0f8ff !important;
					    color: #4a90e2;
					  }
					  .Range .DayPicker-Day {
					    border-radius: 0 !important;
					  }
					  .days-range-form {
					    border: 1px solid gray;
					    padding: 20px;
					    margin: 30px 0;
					  }
					`}</style>
        </Helmet>
      </div>
    )
  }
}

export default DaysRangeForm
