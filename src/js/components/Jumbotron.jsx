import react from "react";

export const Jumbotron = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-50 mt-2">
      <div className="jumbotron text-center border border-secondary rounded-lg shadow-sm p-5 w-100">
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
