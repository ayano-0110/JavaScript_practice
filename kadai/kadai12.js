// 商品クラスの生成
class Item {
    // コンストラクター
    constructor(id, name, stock) {
        //　引数の値を使ってプロパティの初期化を行う
        this.id = id;       // 商品ID
        this.name = name;   // 商品名
        this.stock = stock; // 在庫数
    }

    // メソッド
    // Idの値を返す
    getId() {
        return this.id;
    }

    // nameの値を返す
    getName() {
        return this.name;
    }

    // stockの値を返す
    getStock() {
        return this.stock;
    }

    // 商品の追加
    addStock(num) {
        this.stock += num;
    }

    // 商品の販売
    sale(num) {
        if (this.stock < num) {
            throw new Error('在庫が足りません')
        } else {
            this.stock -= num;
        }
    }
}

// 椅子クラス（子クラス）
class Chair extends Item {
    constructor(id, name, stock, used) {
        super(id, name, stock); 
        this.used = used;   
    }

    getCondition() {
        return this.used ? '中古' : '新品';
    }
}

// インスタンスの生成
let chair1 = new Chair('1001', 'オフィスチェア', 50, false);
let chair2 = new Chair('1002', 'ゲーミングチェア', 30, true);
let chair3 = new Chair('1003', 'ダイニングチェア', 20, false);

// プロパティを取得して表示
console.log(chair1.getId(), chair1.getName(), chair1.getStock(), chair1.getCondition());
console.log(chair2.getId(), chair2.getName(), chair2.getStock(), chair2.getCondition());
console.log(chair3.getId(), chair3.getName(), chair3.getStock(), chair3.getCondition());

// 在庫の変更
chair1.sale(10);
chair2.addStock(15);

// 再度プロパティを表示
console.log(chair1.getId(), chair1.getName(), chair1.getStock(), chair1.getCondition());
console.log(chair2.getId(), chair2.getName(), chair2.getStock(), chair2.getCondition());




