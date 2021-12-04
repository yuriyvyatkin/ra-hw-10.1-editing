import './Form.css';
import { connect } from 'react-redux';
import {
  addService,
  addServiceChanges,
  endServiceEditing,
  changeServiceField
} from '../../actions/actionCreators';
import PropTypes from 'prop-types';

function Form(props) {
  const {
    form,
    onServiceSubmit,
    onChangesSubmit,
    onReset,
    onChange,
  } = props;

  function handleInputChange({ target }) {
    const { name, value } = target;

    onChange(name, value);
  }

  return (
    <form
      className="Form"
      onSubmit={(event) => {
        event.preventDefault();
        const { name, price } = form;

        if (form.editingMode.state) {
          const { index } = form.editingMode;

          onChangesSubmit(index, name, price);
          onReset();
        } else {
          onServiceSubmit(name, price);
        }
      }}

      onReset={(event) => {
        event.preventDefault();

        onReset();
      }}
    >
      <div className="Form-control">
        <label htmlFor="name">Услуга</label>
        <input
          className="Form-control__name"
          type="text"
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleInputChange}
          placeholder="Например: Замена..."
          autoComplete="off"
        />
      </div>
      <div className="Form-control">
        <label htmlFor="price">Стоимость (руб.)</label>
        <input
          className="Form-control__price"
          type="number"
          id="price"
          name="price"
          min="1"
          max="999999"
          required
          value={form.price}
          onChange={handleInputChange}
          onFocus={({ target }) => target.select()}
        />
      </div>
      <input
        className="Form-control__button-save"
        type="submit"
        value="Сохранить"
      />
      {
        form.editingMode.state
        && <input
            className="Form-control__button-reset"
            type="reset"
            value="Отменить"
          />
      }
    </form>
  );
}

Form.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onServiceSubmit: PropTypes.func.isRequired,
  onChangesSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  form: state.form,
});

const mapDispatchToProps = ({
  onServiceSubmit: addService,
  onChangesSubmit: addServiceChanges,
  onReset: endServiceEditing,
  onChange: changeServiceField,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
