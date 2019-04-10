import React from 'react';

class Admin extends React.Component {
	constructor(props) {
		super(props);
	}

	onMenuChecked(item) {
		this.props.onMenuChecked(item);
	}

	render() {
		return (
			<div className="plug-admin">
				<div className="admin-top"></div>
				<div className="admin-body">
					<div className="menu-warp">
						{this.props.menuData.map( (item) => {
							return (
								<div className="item" key={item.name}
									onClick={() => {this.onMenuChecked(item)}}
								>
									{item.name}
								</div>
							)
						})}
					</div>
					<div className="slot-content">{this.props.children}</div>
				</div>
				<style jsx>{`
					.plug-admin {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						font-size: 14px;
					}
					.admin-top {
						position: fixed;
						top: 0;
						left: 0;
						right: 0;
						height: 50px;
						background: rgb(84, 92, 100);
						box-sizing: border-box;
						border-bottom: 5px solid #5FB878;
					}
					.admin-body {
						padding-top: 50px;
						height: 100%;
					    box-sizing: border-box;
					}
					.menu-warp {
						width: 200px;
						height: 100%;
						float: left;
						box-sizing: border-box;
						background: rgb(84, 92, 100);
						color: #fff;
					}
					.menu-warp .item {
						height: 50px;
						line-height: 50px;
						padding-left: 30px;
						cursor: pointer;
						font-size: 15px;
					}
					.menu-warp .item:hover {
						background: rgb(67, 74, 80);
					}
					.slot-content {
						width: calc(100% - 200px);
						height: 100%;
						float: right;
						background: rgb(237, 237, 239);
					}
				`}</style>
			</div>
		)
	}
}

export default Admin