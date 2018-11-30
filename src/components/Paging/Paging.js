import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  loadCurrencyRates,
  loadForNextDay,
  loadForPreviousDay
} from "../../store/actions/currencyRates/currencyRatesActionCreators";
import { getCurrencyRatesData } from "../../store/selectors/currencyRatesSelectors";
import PagingButton from "../PagingButton/PagingButton";

const Paging = ({
  loadCurrencyRates,
  loadForNextDay,
  loadForPreviousDay,
  date,
  loading,
  nextDate
}) => {
  const prevButton = date ? (
    <PagingButton disabled={loading} onClick={loadForPreviousDay}>
      Previous
    </PagingButton>
  ) : null;
  const nextButton = date ? (
    <PagingButton disabled={loading || !nextDate} onClick={loadForNextDay}>
      Next
    </PagingButton>
  ) : null;
  const label = date ? "Refresh rates" : "Load rates";
  const refreshButton = (
    <PagingButton disabled={loading} onClick={loadCurrencyRates}>
      {label}
    </PagingButton>
  );

  return (
    <span>
      {prevButton}
      {refreshButton}
      {nextButton}
    </span>
  );
};

Paging.propTypes = {
  loadCurrencyRates: PropTypes.func.isRequired,
  loadForNextDay: PropTypes.func.isRequired,
  loadForPreviousDay: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date),
  nextDate: PropTypes.instanceOf(Date),
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { date, loading, nextDate } = getCurrencyRatesData(state);
  return {
    date,
    loading,
    nextDate
  };
};

const mapDispatchToProps = {
  loadCurrencyRates,
  loadForNextDay,
  loadForPreviousDay
};

const ConnectedPaging = connect(
  mapStateToProps,
  mapDispatchToProps
)(Paging);

export { ConnectedPaging as default, Paging };
