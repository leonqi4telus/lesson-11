import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
