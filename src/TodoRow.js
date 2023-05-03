import React from "react";
import styled from "styled-components";

/*
Life Cycle method를 사용하기 위해

TodoRow 컴포넌트를 함수형 컴포넌트에서 클래스형 컴포넌트로 바꿔줍니다.

console.log는 지우겠습니다.
const TodoRow = ({ index, todo, handleClickRemove }) => {
    console.log(`${todo} 컴포넌트 렌더링`);
    return (
      <Container>
        <Text onClick={() => handleClickRemove(index)}>{todo}</Text>
      </Container>
    );
  };

*/

//shouldComponentUpdate(nextProps, nextState)는 매개변수로 새로운 props와 state을 받습니다.
/*
컴포넌트가 렌더링하기 직전에 실행되며 여기에서
true를 반환하면 렌더링을 수행하고,
false를 반환하면 렌더링을 수행하지 않습니다.
따로 구현하지 않으면 항상 true를 반환합니다.
*/
class TodoRow extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.todo === nextProps.todo) {
          return false;
        }
        return true;
      }

    render() {
      const { index, todo, handleClickRemove } = this.props;
      console.log(`${todo} 컴포넌트 렌더링`);
      return (
        <Container>
          <Text onClick={() => handleClickRemove(index)}>{todo}</Text>
        </Container>
      );
    }
  }

const Container = styled.div`
  margin: 13px 0;
  width: 80%;
  text-align: left;
`;

const Text = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 32px;
  &:hover {
    opacity: 0.4;
  }
`;

export default TodoRow;