import React, { Component } from 'react';
import { Container, Content, Form, Input, Item, Label, Icon, Button, Text, Footer, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './login-style';

class Login extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Image
					source={require('../assets/full.jpg')}
					style={{
						position: 'absolute',
						height: '100%'
					}}
				/>
				<LinearGradient
					colors={[
						'#000000',
						'#000000aa',
						'#ffffff11',
						'#000000aa',
						'#000000'
					]}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						bottom: 0,
						right: 0
					}}
					start={{
						x: 0,
						y: 1
					}}
					end={{
						x: 0,
						y: 0
					}}
				/>
				<View style={styles.contentUp}>
					<Icon
						style={[
							styles.icon,
							styles.title,
							styles.red
						]}
						active
						name="play"
					/>
					<Text style={styles.title}>VIDEOS</Text>
				</View>
				<Content style={styles.contentDown}>
					<Form style={styles.form}>
						<Item floatingLabel last style={styles.item}>
							<Icon style={styles.icon} active name="mail" />
							<Label style={styles.label}>Email</Label>
							<Input style={styles.input} />
						</Item>
						<Item floatingLabel last style={styles.item}>
							<Icon style={styles.icon} active name="eye" />
							<Label style={styles.label}>Password</Label>
							<Input style={styles.input} />
						</Item>
					</Form>
					<View style={styles.buttonGroup}>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('ForgotPassword')}
							style={{ padding: 10, marginBottom: 20 }}
						>
							<Text style={styles.buttonForgotPass}>Forgot My Password ?</Text>
						</TouchableOpacity>
						<Button
							primary
							full
							style={styles.buttonSignIn}
							onPress={() => this.props.navigation.navigate('Home')}
						>
							<Text>Sign In</Text>
						</Button>
					</View>
				</Content>
				<Footer style={styles.footer}>
					<Button transparent onPress={() => this.props.navigation.navigate('SignUp')}>
						<Text style={styles.buttonSignUp}>Sign up for free</Text>
					</Button>
				</Footer>
			</Container>
		);
	}
}

export default Login;
