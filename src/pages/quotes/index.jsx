/* eslint-disable no-undef */
import { useState } from 'react'

import { useFormik } from 'formik'

import { getQuotes } from '../../services/quotations'

function Quotes() {
  const [quotations, setQuotations] = useState([])

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      cepSource: '',
      cepDestination: '',
      weightPackage: '',
      widthPackage: '',
      heightPackage: '',
      lengthPackage: ''
    },
    onSubmit: data => {
      const transformValues = {
        zipCodeSource: data.cepSource,
        zipCodeDestination: data.cepDestination,
        weight: data.weightPackage,
        dimension: {
          width: data.widthPackage,
          height: data.heightPackage,
          length: data.lengthPackage
        }
      }

      for (prop in values) {
        if (values[prop] === '') {
          alert('Fill all information')
          return false
        }
      }


      getQuotes(transformValues)
        .then(({ data }) => setQuotations(data.quotations))
        .cath(err => console.log('error =>', err))
    }
  })

  return (
    <main className="container">
      <h1 className="display-4 text-center">Get quotes for packages</h1>

      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mt-5">
          <p className="display-6">Information of Package</p>

          <div className="row">
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label htmlFor="cepSource" className="form-label">Cep origin</label>
                <input
                  type="text"
                  className="form-control"
                  name="cepSource"
                  placeholder="00000-000"
                  onChange={handleChange}
                  value={values.cepSource}
                />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label htmlFor="cepDestination" className="form-label">Cep destination</label>
                <input
                  type="text"
                  className="form-control"
                  name="cepDestination"
                  placeholder="00000-000"
                  onChange={handleChange}
                  value={values.cepDestination}
                />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label htmlFor="weightPackage" className="form-label">Weight</label>
                <input
                  type="number"
                  className="form-control"
                  name="weightPackage"
                  placeholder="00"
                  onChange={handleChange}
                  value={values.weightPackage}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <p className="display-6">Dimesions</p>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="widthPackage" className="form-label">Width</label>
                <input
                  type="number"
                  className="form-control"
                  name="widthPackage"
                  placeholder="00"
                  onChange={handleChange}
                  value={values.widthPackage}
                />
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label htmlFor="heightPackage" className="form-label">Height</label>
                <input
                  type="number"
                  className="form-control"
                  name="heightPackage"
                  placeholder="00"
                  onChange={handleChange}
                  value={values.heightPackage}
                />
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label htmlFor="lengthPackage" className="form-label">length</label>
                <input
                  type="number"
                  className="form-control"
                  name="lengthPackage"
                  placeholder="00"
                  onChange={handleChange}
                  value={values.lengthPackage}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Search price
        </button>
      </form>

      {quotations.length !== 0 && (
        <div className="container p-0 mt-5">
          <p className="display-6">Information of delivery</p>

          <div className="grid">
            {quotations.map(item => (
              <div className="card g-col-4" key={item.shippingServiceCode}>
                <div className="card-body">
                  <h5 className="card-title">{item.shippingServiceName}</h5>
                  <p className="card-text">{item.carrier}</p>

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Price of platform: </strong>
                      R$ {item.platformShippingPrice.toFixed(2)}
                    </li>
                    <li className="list-group-item">
                      <strong>Delivery Time: </strong>
                      {item.deliveryTime}
                    </li>
                    <li className="list-group-item">
                      <strong>Price of Competior: </strong>
                      R$ {item.shippingCompetitorPrice.toFixed(2)}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default Quotes
