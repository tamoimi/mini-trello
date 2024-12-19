import styled from "styled-components";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

function App() {
  const onDragEnd = () => {};

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            <Droppable droppableId="one">
              {(magic) => (
                <Board ref={magic.innerRef} {...magic.droppableProps}>
                  <Draggable draggableId="first" index={0}>
                    {(magic) => (
                      <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                        One
                      </Card>
                    )}
                  </Draggable>
                  <Draggable draggableId="second" index={1}>
                    {(magic) => (
                      <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                        Two
                      </Card>
                    )}
                  </Draggable>
                </Board>
              )}
            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
