var lifeTime = 3;
function Start() {
    yield WaitForSeconds(lifeTime);
    Destroy(this.gameObject);
}
function OnCollisionEnter() {

Destroy (gameObject);
}