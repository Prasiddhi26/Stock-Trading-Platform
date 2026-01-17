import React from "react";

function CreateTicket({ heading, link1, link2, link3,collapseId}) {
  return (
    <div className="container mb-3 ">
      <div className="row">
        <div className="col">
       

          <h3 className="w-100 mb-2">
            <a
              className="btn border p-3 w-100 d-block text-start"
              data-bs-toggle="collapse"
              href={`#${collapseId}`}
              role="button"
              aria-expanded="false"
              aria-controls={collapseId}
            >
              {heading}
            </a>
          </h3>

          <div className="collapse w-100" id={collapseId}>
            <div className="card card-body w-100">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-primary text-decoration-none">
                    {link1}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary text-decoration-none">
                    {link2}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary text-decoration-none">
                    {link3}
                  </a>
                </li>
              </ul>
            </div>
             
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;
