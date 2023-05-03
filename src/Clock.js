import React from "react";
import styled from "styled-components";

class Clock extends React.Component{
    state = {
        date: new Date()
    }

    render(){

        const { date } = this.state;
        return (
          <Container>
            <CurDate>
              {date.getFullYear()}&nbsp;/&nbsp;
              {date.getMonth() + 1}&nbsp;/&nbsp;
              {date.getDate()}
            </CurDate>
            <CurDay>
              {date.getDay() === 0
                ? "Sunday"
                : date.getDay() === 1
                ? "Monday"
                : date.getDay() === 2
                ? "Tuesday"
                : date.getDay() === 3
                ? "wednesday"
                : date.getDay() === 4
                ? "Thursday"
                : date.getDay() === 5
                ? "Friday"
                : "Saturday"}
            </CurDay>
            <CurTime>
              {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
              &nbsp;:&nbsp;
              {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
              &nbsp;:&nbsp; 
              {date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}
            </CurTime>
        
          </Container>
        );
    }


    getDate = () => {
        this.setState({
            date: new Date()
        })
    }

    /*
    컴포넌트의 실행흐름에 따라 자동으로 실행되는 Life cycle method입니다.Life cycle method는 컴포넌트가 처음 나타나는 순간부터
    화면에서 사라지는 순간까지 각 단계에 따라 하나씩 순차적으로 실행되는 함수들입니다.
    따로 정의하지 않으면 해당 메소드가 실행되는 시점에서 아무일도 하지 않으므로 필요할 때에만 정의해주면 됩니다.
    componentDidMount는 컴포넌트가 화면에 전부 그려졌을 때 실행됩니다.

    React가 컴포넌트를 출력하는 복잡한 과정이 다 끝난 상태에서 실행되므로 또다른 액션을 취하기에 좋은 곳입니다.
    여기에서는 주로 API를 통해 데이터를 불러오거나 setTImeout, setInterval등을 설정해줍니다.
    */
    componentDidMount() {
        this.oneMinuteCall = setInterval(() => this.getDate(), 1000);
      }
    

    /*
    역시 Life Cycle method입니다.
    componentWillUnmount는 화면에 그려진 컴포넌트가 사라지기 직전에 호출됩니다.

    위에 componentDidMount에서 1분마다 함수가 실행되게 설정했는데
    컴포넌트가 화면에서 사라진 후에도 계속 실행되면 안되겠죠?

    여기에서 clearInterval을 사용하여 componentDidMount에서 설정해두었던
    setInterval을 해제해줍니다.
    
    */
      componentWillUnmount() {
        clearInterval(this.oneMinuteCall);
      }
}



const Container = styled.div`
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const CurDate = styled.div`
  font-size: 24px;
`;

const CurDay = styled.div`
  font-style: italic;
`;

const CurTime = styled.div`
  font-size: 55px;
  font-weight: 600;
`;

export default Clock;