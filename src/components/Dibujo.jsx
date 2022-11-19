import * as React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import PropTypes from "prop-types";
export default class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
    this.state = {
      strokeColor: "black",
      canvasColor: "white",
      strokeWidth: 2,
    };
  }

  changeStrokeColor(color) {
    this.setState({
      strokeColor: color || "black",
    });
  }

  changeCanvasColor(color) {
    this.setState({
      canvasColor: color,
    });
  }

  changeStrokeWidth(num) {
    this.setState({
      strokeWidth: num,
    });
  }

  render() {
    return (
      <div>
        <p className="text-base font-bold">Drawing App</p>
        {this.strokeColor === 0 && (
          <p className="text-base font-bold">Firma guardada!</p>
        )}
        <div
          className="rounded-t-lg

border-ihnerit border p-1"
        >
          <ReactSketchCanvas
            ref={this.canvas}
            strokeWidth={this.state.strokeWidth}
            strokeColor={this.state.strokeColor}
            canvasColor={this.state.canvasColor}
            height="600px"
            width="800px"
          />
        </div>
        <div className="flex justify-center">
          <button
            className=" text-center items-center w-1/2  bg-gray-200 hover:bg-gray-300 text-sm  rounded-bl-lg border border-gray-300
           "
            onClick={() => {
              this.canvas.current.clearCanvas();
              this.changeCanvasColor("white");
              this.changeStrokeWidth(2);
              this.props.setInputdibujo("");
            }}
          >
            Reiniciar lienzo
          </button>
          <div className="flex justify-center">
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => {
                this.changeStrokeColor("red");
              }}
            >
              rojo
            </button>
            <button
              style={{ backgroundColor: "green" }}
              onClick={() => {
                this.changeStrokeColor("green");
              }}
            >
              verde
            </button>
            <button
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                this.changeStrokeColor("blue");
              }}
            >
              azul
            </button>
            <button
              style={{ backgroundColor: "yellow" }}
              onClick={() => {
                this.changeStrokeColor("yellow");
              }}
            >
              yellow
            </button>
            <button
              style={{ backgroundColor: "#FF36F9" }}
              onClick={() => {
                this.changeStrokeColor("#FF36F9");
              }}
            >
              Rosa
            </button>
            <button
              onClick={() => {
                this.canvas.current.undo();
              }}
            >
              Undo
            </button>
            <button
              onClick={() => {
                this.canvas.current.redo();
              }}
            >
              redo
            </button>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => {
              this.changeStrokeWidth(2);
            }}
          >
            pincel Pequeño
          </button>
          <button
            onClick={() => {
              this.changeStrokeWidth(4);
            }}
          >
            pincel Mediano
          </button>
          <button
            onClick={() => {
              this.changeStrokeWidth(6);
            }}
          >
            pincel Grande
          </button>
          <button
            onClick={() => {
              // console.log(this.canvas)
              this.canvas.current.exportPaths().then((r) => {
                console.log(r);
              });
            }}
          >
            descargar
          </button>
        </div>
      </div>
    );
  }
}

Canvas.propTypes = {
  setInputdibujo: PropTypes.func.isRequired,
};
