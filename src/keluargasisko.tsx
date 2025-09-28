function KeluargaSisko() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3 text-center">Keluarga Sisko</h1>
      <div className="flex items-center justify-center m-2 text-center">
        <div className="flex flex-col">
          <img src="sisko.png" alt="" width="120" height="120" />
          <p>Sisko</p>
          <p>(ayah)</p>
        </div>
        <div className="p-5"></div>
        <div className="flex flex-col">
          <img src="nursanti.png" alt="" width="120" height="120" />
          <p>Nursanti</p>
          <p>(ibu)</p>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center items-center text-center">
        <div>
          <img
            src="noface.png"
            alt=""
            className="min-w-[80px] min-h-[80px
          ] "
          />
          <p>Saskia</p>
          <p>(anak 1) 🕊️</p>
        </div>
        <div>
          <img
            src="ferry.png"
            alt=""
            className="min-w-[80px] min-h-[80px
          ] "
          />
          <p>Ferry Kurniawan</p>
          <p>(anak 2)</p>
        </div>
        <div>
          <img
            src="suci.png"
            alt=""
            className="min-w-[80px] min-h-[80px
          ]"
          />
          <p>Suci Rahmawati</p>
          <p>(anak 3)</p>
        </div>
        <div>
          <img
            src="noface.png"
            alt=""
            className="min-w-[80px] min-h-[80px
          ]"
          />
          <p>Diva Putri Cahyanti</p>
          <p>(anak 4)</p>
        </div>
        <div>
          <img
            src="noface.png"
            alt=""
            className="min-w-[80px] min-h-[80px
          ]"
          />
          <p>Havika wulan nurwani</p>
          <p>(anak 5)</p>
        </div>
      </div>
    </div>
  );
}

export default KeluargaSisko;
