import * as React from "react";
import { Welcome } from "./Welcome";
import { Clock } from "./Clock";

export class App extends React.Component<{}> {
    render() {
        return (
            <div>
              <Welcome name="Sara" />
              <Welcome name="Cahal" />
              <Welcome name="Edite" />
              <Clock />
            </div>
          );
    }
}