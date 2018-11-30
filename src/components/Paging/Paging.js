import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  loadForToday,
  loadForTomorrow,
  loadForYesterday
} from "../../store/actions/currencyRates/currencyRatesActionCreators";
import { getCurrencyRatesData } from "../../store/selectors/currencyRatesSelectors";
import PagingButton from "../PagingButton/PagingButton";

const Paging = ({
  loadForToday,
  loadForTomorrow,
  loadForYesterday,
  date,
  loading,
  nextDate
}) => {
  const prevButton = date ? (
    <PagingButton disabled={loading} onClick={loadForYesterday}>
      Previous
    </PagingButton>
  ) : null;
  const nextButton = date ? (
    <PagingButton disabled={loading || !nextDate} onClick={loadForTomorrow}>
      Next
    </PagingButton>
  ) : null;
  const label = date ? "Refresh rates" : "Load rates";
  const refreshButton = (
    <PagingButton disabled={loading} onClick={loadForToday}>
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
  loadForToday: PropTypes.func.isRequired,
  loadForTomorrow: PropTypes.func.isRequired,
  loadForYesterday: PropTypes.func.isRequired,
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
  loadForToday,
  loadForTomorrow,
  loadForYesterday
};

const ConnectedPaging = connect(
  mapStateToProps,
  mapDispatchToProps
)(Paging);

export { ConnectedPaging as default, Paging };
