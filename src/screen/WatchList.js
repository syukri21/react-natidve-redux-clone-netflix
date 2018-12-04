import React from 'react';
import {
	Container,
	Header,
	Content,
	SwipeRow,
	View,
	Text,
	Icon,
	Button,
	ListItem,
	List,
	CardItem,
	Card,
	Left,
	Body
} from 'native-base';
import { ListView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { deleteWatchList } from '../actions/watchListAction';
import HeaderMod from '../components/HeaderMod';
import DrawerMod from '../components/DrawerMod';

class WatchList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			listViewData: props.watchListFilm,
			ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		};
		this.navigation = props.navigation;
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
	}

	toggleDrawer() {
		this.setState({
			isOpen: true
		});
	}

	renderItem(item) {
		return (
			<TouchableOpacity
				last
				style={{}}
				onPress={() => this.props.navigation.navigate('Detail', { itemId: item.id })}
				key={item.id}
			>
				<View style={{ flex: 1, margin: 0, padding: 0, flexDirection: 'row' }}>
					<CardItem style={{ flex: 2, padding: 0, backgroundColor: 'green' }} cardBody>
						<Image source={item.gambar} style={{ width: '100%', height: 120, flex: 1 }} />
					</CardItem>
					<CardItem
						style={{
							flex: 3,
							borderBottomColor: 'black',
							borderBottomWidth: 2,
							backgroundColor: '#222',
							borderRadius: 0
						}}
					>
						<Left>
							<Text style={{ color: 'white' }}>{item.title}</Text>
						</Left>
					</CardItem>
				</View>
			</TouchableOpacity>
		);
	}

	handleDelete(secId, rowId, rowMap, id) {
		this.props.deleteWatchList(id);
		rowMap[`${secId}${rowId}`].props.closeRow();
		const newData = [
			...this.state.listViewData
		];
		newData.splice(rowId, 1);
		this.setState({ listViewData: newData });
	}

	render() {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		return (
			<DrawerMod isOpen={this.state.isOpen} watchList {...this.props}>
				<Container>
					<HeaderMod {...this.props} menu={true} toggleDrawer={this.toggleDrawer.bind(this)} add>
						My Watchlist
					</HeaderMod>
					<Content style={{ backgroundColor: 'black' }}>
						<List
							renderRow={(data) => this.renderItem(data)}
							rightOpenValue={-100}
							dataSource={this.state.ds.cloneWithRows(this.props.watchListFilm)}
							renderRightHiddenRow={(data, secId, rowId, rowMap) => (
								<Button full danger onPress={() => this.handleDelete(secId, rowId, rowMap, data.id)}>
									<Icon active name="trash" />
								</Button>
							)}
						/>
					</Content>
				</Container>
			</DrawerMod>
		);
	}
}

const mapStateToProps = (state) => ({
	watchListFilm: state.watchListFilm
});

const mapDispatchToProps = (dispatch) => ({
	deleteWatchList: (id) => dispatch(deleteWatchList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
