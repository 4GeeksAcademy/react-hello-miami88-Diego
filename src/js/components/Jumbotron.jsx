import react from "react";

export const Jumbotron = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-50">
      <div className="jumbotron text-center border border-secondary rounded-lg shadow-sm p-5">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.
        </p>
        <hr className="my-4" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action!
        </a>
      </div>
    </div>
  );
};
