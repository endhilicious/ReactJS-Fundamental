import React , {Component}from 'react'

class Testing extends Component {
  constructor(){
    super();
    this.state = {
      nama : 'endi',
      angka1 : 0,
      angka2 : 0,
      hasil :0,
      isLogin : false
    }
  }
  prosesTambah = ()=> {
    this.setState({isLogin:!this.state.isLogin})
  }
  angka1Berubah(nilai){
    // console.log('ini angka 1 = '+nilai);
    this.setState({angka1:nilai})
  }
  angka2Berubah(nilai){
    // console.log('ini angka 2 = '+nilai);
    this.setState({angka2:nilai})
  }
  hasilnya(){
    return(parseInt(this.state.angka1))+(parseInt(this.state.angka2));
  }
  render () {
    const {isLogin} = this.state;
    const styleSaya = {
      color:'#000',
      backgroundColor:'wheat'
    }
    return(
      <div id='tes1' className='tes' style={styleSaya}>
        <h1>Halo Testing hahah</h1>
        <h3>ini H3</h3>
        {(isLogin)
          ?
          <div>
            <input type="number" onChange={(coy)=>this.angka1Berubah(coy.target.value)}/>
            <input type="number" onChange={(coy)=>this.angka2Berubah(coy.target.value)} />
            <h2>{this.hasilnya()}</h2>
          </div>
          :
          <div>
            Silahkan klik login
          </div>
        }
      <button onClick={()=>this.prosesTambah()}>klik saya</button>
      </div>
    )
  }
}

export default Testing;
