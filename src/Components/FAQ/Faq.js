import React from "react";

const Faq = () => {
  return (
    <>
      <div>
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Frequently Asked Question</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">The most common questions about how our business works and what can do for you.</p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">Customer setup for their own content source is required.</summary>

                  <span>
                    Due to the fact that OTT accounts cannot be used for commercial purposes, we do not grant access to any OTT accounts. You must have a personal OTT account. To make it simple for
                    you to sign in to your account and begin watching, we offer a firestick
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">Content that is illegal or forbidden is not permitted.</summary>

                  <span>
                    We disclaim any responsibility in these situations. Customers must not stream any material that is against the law or otherwise prohibited by Indian legislation. We won't be held
                    responsible for any outcomes that result from breaking this rule, and we won't let such customers book with us again.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">Refund Policy.</summary>

                  <span>
                    If the reservation is canceled at least 72 hours before the reservation time, a full refund of the advance amount will be issued.If there is a technical issue on our end, a
                    suitable refund will be given. We will return the money paid after subtracting the rent for the time before to the interruption if the projector, firestick, internet access, or
                    sound system malfunction.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">Restricted consumption.</summary>

                  <span>Customers are not allowed to smoke, consume alcoholic beverages or any illegal substance inside the theater. Appropriate action would be taken against such customers.</span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">Pets are strictly not allowed inside the theatre.</summary>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">You are responsible for your belongings.</summary>

                  <span className="px-4 py-2">We will not be responsible in case of loss of personal belongings of any nature. Customers must take care of their belongings.</span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">The booking period includes set up and check out time.</summary>

                  <span className="px-4 py-2">Customers must vacate the theater along with all their belongings on or before the end time.</span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">Cleaning fee up to Rs 500 will be charged in cases where significant cleaning.</summary>

                  <span>
                    would be required after check out In cases where cleaners would be required to clean the garbage, left overs and other wastes after the customers check out, the customers will have
                    to pay appropriate cleaning fee.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">Customers must not make any changes to the configuration of technical equipment.</summary>

                  <span className="px-4 py-2">
                    Customers should not make adjustments or modifications to the set up of projector, screen, laptop and sound system. If any changes is required, we will do it from our end.
                  </span>
                </details>

                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Customers will be liable to pay in case of any damage to the theater caused by them If there is any damage to any of the.
                  </summary>

                  <span className="px-4 py-2">Technical or non technical item in the theater including the walls, lights, seating, etc. the customers will have to pay for it.</span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Faq;
