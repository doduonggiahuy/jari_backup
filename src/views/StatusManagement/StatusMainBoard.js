import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { ColumnHeader, TicketList } from "./StatusColumn";
import { StrictModeDroppable as Droppable } from "./StrictModeDroppable.tsx";
import avatar from "@assets/image/avatar.png";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 73%;
  overflow: auto;
`;

const Column = styled.div`
  min-width: 28%;
  border-radius: 16px;
  padding: 8px;
  margin: 0 1.5%;
  color: #0a4874;
  padding: 1%;
  background-color: #ebf1f3;
`;

const tasks = [
  {
    id: "JARI-01",
    ticketName: "Ticket 1",
    sprint: "Ticket Management",
    type: "Bug",
    avatar: avatar,
  },
  {
    id: "JARI-02",
    ticketName: "Ticket 2",
    sprint: "Ticket Management",
    type: "Story",
    avatar: avatar,
  },
  {
    id: "JARI-03",
    ticketName: "Ticket 3",
    sprint: "Ticket Management",
    type: "Task",
    avatar: avatar,
  },
];

const columns = {
  "column-1": {
    id: "column-1",
    title: "TO DO",
    taskIds: ["JARI-01", "JARI-02", "JARI-03"],
  },
  "column-2": {
    id: "column-2",
    title: "IN PROGRESS",
    taskIds: [],
  },
  "column-3": {
    id: "column-3",
    title: "DONE",
    taskIds: [],
  },
};

const IssueBoardMain = () => {
  const [state, setState] = useState(columns);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const startColumn = state[source.droppableId];
    const endColumn = state[destination.droppableId];
    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };
      setState({
        ...state,
        [newColumn.id]: newColumn,
      });
    } else {
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds,
      };
      const endTaskIds = Array.from(endColumn.taskIds);
      endTaskIds.splice(destination.index, 0, draggableId);
      const newEndColumn = {
        ...endColumn,
        taskIds: endTaskIds,
      };
      setState({
        ...state,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn,
      });
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.values(state).map((column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <Column ref={provided.innerRef} {...provided.droppableProps}>
                <ColumnHeader
                  title={column.title}
                  taskCount={column.taskIds.length}
                />
                <TicketList
                  tasks={column.taskIds.map((taskId) =>
                    tasks.find((task) => task.id === taskId)
                  )}
                />
                {provided.placeholder}
              </Column>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </Container>
  );
};

export default IssueBoardMain;
