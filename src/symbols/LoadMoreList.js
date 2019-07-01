import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  AppRegistry
} from 'react-native';

import { ListView, GotoTopCreator } from 'react-native-refreshable-useful';

const ListViewWithScrollController = GotoTopCreator ( ListView );

export default class LoadMoreList extends Component {
  constructor ( props ) {
    super ( props );

    this.pageSize = 10;
  }

  componentDidMount() {

    this.refs.listView.onRefresh ( );
  }

  onRefresh ( fn, params ) {

    this.getItems ( fn, 1 )
  }

  getItems ( fn, page ) {

    let list = [];

    let currLayer = ( page - 1 ) * this.pageSize + 1;

    let loadLayer = currLayer + this.pageSize;

    if ( loadLayer > 100 ) loadLayer -= 1; // hasMore = false

    for (; currLayer < loadLayer; currLayer++) {

      //list.push({num: Math.random(), layer: currLayer});
      list.push({
        key: "1",
        date: "01/09/2018",
        events: "1",
        points: "2",
        days: "1 dias",
        name: "title"
      });
    }

    fn && 
    setTimeout(()=>{

      fn ( list )
    }, 500);

    return list;
  }

  onLoadMore ( fn, page ) {

    this.getItems ( fn, page )
  }

  renderRow ( { item, index } ) {

    return (<View style={S.row}>
                <View style={S.cellOne}>
                  <Text style={S.textDataData}>{item.name}</Text>
                </View>
                <View style={S.cellTwo}>
                  <Text style={S.textEvent}>{item.events}</Text>
                </View>
                <View style={S.cellThree}>
                  <Text style={S.textPointsData}>{item.points}</Text>
                </View>
                <View style={S.cellFour}>
                  <Text style={S.textView}>{item.days}</Text>
                </View>
              </View>);
  }

  renderGotoTop ( ) {

    let props = {
      props: {
        hideStyle: { bottom: -100 },
        showStyle: { bottom: 40 }
      }
    };
    /* more info: please read source(listView.js: _renderGotoTop) */

    return props;
  }

  renderFooter ( ) {

    let props = {
      style: {
        height: 44
      }
    };

    /*
    if listView props[dftFooter] equals false,
    you could do (return <View/>)
    */

    return props;
  }

  onScroll(evt) {

  }

  onEndReached ( ) {

    /* just onEndReached */
  }

  ItemSeparatorComponent(){
            return <View style={S.rect4} />;
  }

  render() {

    return (
      <View style={S.container}>
        <ListViewWithScrollController
          ref="listView"
          debug={false}                                    /* (optional) debug mode [ test only ] */
          data={ this.getItems ( null, 1 ) }              /* (optional) init list */
          pageSize={ 10 }
          dftFooter                                       /* (optional) use default loadMore component */
          onScroll={this.onScroll.bind(this)}             /* (optional) */
          onRefresh={this.onRefresh.bind(this)}           /* (optional) refresh data */
          ItemSeparatorComponent={ this.ItemSeparatorComponent }        /* (optional) ... */
          renderRow={this.renderRow.bind(this)}           /* (required) ... */
          renderFooter={this.renderFooter.bind(this)}     /* (optional) footer component / loadMore options */
          renderGotoTop={this.renderGotoTop.bind(this)}   /* (optional) scrollTo(y:0) controller */
          onLoadMore={ this.onLoadMore.bind ( this ) }    /* (optional) onEndReached & hasMore */
          /* ...any FlatList props */
          /* more info and option: please view source :) */
        />
      </View>
    )
  }
}
const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  },
  titleBar: {
    height: 64,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  titleText: {
    color: '#EEE'
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#DDD'
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 6
  },
  rowChecked: {
    backgroundColor: '#666'
  },
  rowCheckedTitle: {
    color: '#EEE'
  },
  rowDesc: {
    marginTop: 12,
    fontSize: 12,
    color: '#888'
  },
  cloudIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  row: {
    backgroundColor: "#ffffff",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    height: 40
  },

  rect4: {
    backgroundColor: "#999999",
    left: 15,
    height: 2
  },
  cellOne: {
    width: "40%",
    alignSelf: "stretch",
    flexDirection: "column"
  },
  cellTwo: {
    width: "20%",
    alignSelf: "stretch"
  },
  cellThree: {
    width: "20%",
    alignSelf: "stretch"
  },
  cellFour: {
    width: "20%",
    alignSelf: "stretch"
  }
});