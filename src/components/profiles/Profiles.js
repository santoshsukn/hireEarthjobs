import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles ,getFilterProfiles } from '../../actions/profile';
import GlobalSearch from '../search/GlobalSearch';

const Profiles = ({ getProfiles,getFilterProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  const setSearchData=(val)=>{
    console.log(val);
    getFilterProfiles(val);
  }
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          
          <h1 className='large text-primary'>Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse and connect with
            developers
          </p>
          <div className="search-block "><GlobalSearch searchData={setSearchData}/></div>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getFilterProfiles:PropTypes.func,

};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  {getFilterProfiles, getProfiles}
)(Profiles);
