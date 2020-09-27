import React from "react";

import { Container } from "react-bootstrap";

function AIPage() {
  return (
    <Container>
      <h1>Tic-Tac-Toe and Min-Max</h1>
      <div>
        <div>
          <p>
            Tic-Tac-Toe is a game between two players who alternate turns
            placing either an X or an O on a board, with the goal of having
            three (3) in a row.
          </p>
          <p>
            It also is a game that's easily transferable into the world of A.I.
            using the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Minimax"
              rel="noopener noreferrer"
              target="_blank"
            >
              Min-Max strategy
            </a>
            .
          </p>
          <p>
            <strong>Min-Max</strong> is a strategy where an{" "}
            <a
              href="https://en.wikipedia.org/wiki/Intelligent_agent"
              rel="noopener noreferrer"
              target="_blank"
            >
              agent
            </a>{" "}
            (in this case the computer) determines the best choice for it's
            current turn by simulating a predetermined number of turns in the
            future, selecting the choice which leads to the best outcome. It
            does this via minimizing the beneficial outcomes for the opposing
            agent while maximizing the beneficial outcomes for itself.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default AIPage;
