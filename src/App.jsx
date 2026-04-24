import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const { Badge, Button, Card } = ReactBootstrap

function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}


/*
export default function App() {
  const [name, setName] = React.useState('World')

  return (
    <div className="container py-4">
      <Card className="starter-card shadow-sm">
        <Card.Body className="p-4">
          <h1 className="greeting display-6 fw-bold">Hello, {name}!</h1>
          <p className="mb-3 text-secondary">
            This starter is set up to match the React Essentials notes more closely.
            For the assignment, build the tic-tac-toe tutorial in this file and leave
            mounting to <code>src/main.jsx</code>.
          </p>
          <div className="d-flex gap-2 flex-wrap align-items-center">
            <Button variant="primary" onClick={() => setName('CS 35L')}>
              Set example name
            </Button>
            <Badge bg="secondary" pill>
              ReactBootstrap ready
            </Badge>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
*/