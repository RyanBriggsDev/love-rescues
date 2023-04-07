import Card from './Card'
import paw from '../assets/images/paw.png'
import Container from './Container'
import { SixGrid } from './Grids'
import { FaDog } from 'react-icons/fa'
import Image from 'next/image'

export function LoadingOtherPets() {
  return (
    <>
      <Card className="animate-pulse col-span-4 sm:col-span-2 lg:col-span-1 justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105 bg-gray-300">
        <div
          className="min-h-[250px] rounded-t bg-contain bg-no-repeat bg-center flex flex-col justify-end bg-gray-300"
          style={{
            backgroundImage: `url(${paw.src})`,
          }}
        >
          <div className="w-full bg-gray-100 px-3 py-5 rounded-t-[100%] text-xl flex justify-center">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[20px]"></div>
          </div>
        </div>
      </Card>
      <Card className="animate-pulse col-span-4 sm:col-span-2 lg:col-span-1 justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105 bg-gray-300">
        <div
          className="min-h-[250px] rounded-t bg-contain bg-no-repeat bg-center flex flex-col justify-end bg-gray-300"
          style={{
            backgroundImage: `url(${paw.src})`,
          }}
        >
          <div className="w-full bg-gray-100 px-3 py-5 rounded-t-[100%] text-xl flex justify-center">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[20px]"></div>
          </div>
        </div>
      </Card>
      <Card className="animate-pulse col-span-4 sm:col-span-2 lg:col-span-1 justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105 bg-gray-300">
        <div
          className="min-h-[250px] rounded-t bg-contain bg-no-repeat bg-center flex flex-col justify-end bg-gray-300"
          style={{
            backgroundImage: `url(${paw.src})`,
          }}
        >
          <div className="w-full bg-gray-100 px-3 py-5 rounded-t-[100%] text-xl flex justify-center">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[20px]"></div>
          </div>
        </div>
      </Card>
      <Card className="animate-pulse col-span-4 sm:col-span-2 lg:col-span-1 justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105 bg-gray-300">
        <div
          className="min-h-[250px] rounded-t bg-contain bg-no-repeat bg-center flex flex-col justify-end bg-gray-300"
          style={{
            backgroundImage: `url(${paw.src})`,
          }}
        >
          <div className="w-full bg-gray-100 px-3 py-5 rounded-t-[100%] text-xl flex justify-center">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[20px]"></div>
          </div>
        </div>
      </Card>
      <Card className="animate-pulse col-span-4 sm:col-span-2 lg:col-span-1 justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105 bg-gray-300">
        <div
          className="min-h-[250px] rounded-t bg-contain bg-no-repeat bg-center flex flex-col justify-end bg-gray-300"
          style={{
            backgroundImage: `url(${paw.src})`,
          }}
        >
          <div className="w-full bg-gray-100 px-3 py-5 rounded-t-[100%] text-xl flex justify-center">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[20px]"></div>
          </div>
        </div>
      </Card>
      <Card className="animate-pulse col-span-4 sm:col-span-2 lg:col-span-1 justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105 bg-gray-300">
        <div
          className="min-h-[250px] rounded-t bg-contain bg-no-repeat bg-center flex flex-col justify-end bg-gray-300"
          style={{
            backgroundImage: `url(${paw.src})`,
          }}
        >
          <div className="w-full bg-gray-100 px-3 py-5 rounded-t-[100%] text-xl flex justify-center">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[20px]"></div>
          </div>
        </div>
      </Card>
      <Card className="animate-pulse col-span-4 sm:col-span-2 lg:col-span-1 justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105 bg-gray-300">
        <div
          className="min-h-[250px] rounded-t bg-contain bg-no-repeat bg-center flex flex-col justify-end bg-gray-300"
          style={{
            backgroundImage: `url(${paw.src})`,
          }}
        >
          <div className="w-full bg-gray-100 px-3 py-5 rounded-t-[100%] text-xl flex justify-center">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[20px]"></div>
          </div>
        </div>
      </Card>
      <Card className="animate-pulse col-span-4 sm:col-span-2 lg:col-span-1 justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105 bg-gray-300">
        <div
          className="min-h-[250px] rounded-t bg-contain bg-no-repeat bg-center flex flex-col justify-end bg-gray-300"
          style={{
            backgroundImage: `url(${paw.src})`,
          }}
        >
          <div className="w-full bg-gray-100 px-3 py-5 rounded-t-[100%] text-xl flex justify-center">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[20px]"></div>
          </div>
        </div>
      </Card>
    </>
  )
}

export function LoadingImages() {
  return (
    <div className="animate-pulse w-full grid grid-cols-3 gap-1">
      <div
        className="bg-contain bg-gray-300 rounded bg-no-repeat bg-center w-100 min-h-[300px] sm:min-h-[500px]"
        style={{
          backgroundImage: `url(${paw.src})`,
        }}
      ></div>
      <div
        className="bg-contain bg-gray-300 rounded bg-no-repeat bg-center w-100 min-h-[300px] sm:min-h-[500px]"
        style={{
          backgroundImage: `url(${paw.src})`,
        }}
      ></div>
      <div
        className="bg-contain bg-gray-300 rounded bg-no-repeat bg-center w-100 min-h-[300px] sm:min-h-[500px]"
        style={{
          backgroundImage: `url(${paw.src})`,
        }}
      ></div>
    </div>
  )
}

export function LoadingMainContent() {
  return (
    <div className="animate-pulse flex items-center justify-center">
      <Container>
        <SixGrid gap="gap-6">
          <LoadingDogInfo />
          <LoadingSidebar />
        </SixGrid>
      </Container>
    </div>
  )
}

function LoadingDogInfo() {
  return (
    <Card className="col-span-6 md:col-span-4 p-6 flex flex-col gap-6 text-center sm:text-start">
      <div className="bg-gray-200 py-6 my-6 rounded-xl sm:w-2/3 h-[20px]"></div>

      <div className="flex gap-3 text-center sm:text-start md:justify-start">
        <div className="bg-gray-200 rounded-xl w-full sm:w-2/3 h-[20px]"></div>
      </div>
      <hr />
      <ul className="flex flex-wrap sm:flex-nowrap md:justify-start gap-3">
        <div className="bg-gray-200 rounded-xl w-full sm:w-2/3 h-[20px]"></div>
        <div className="bg-gray-200 rounded-xl w-full sm:w-2/3 h-[20px]"></div>
        <div className="bg-gray-200 rounded-xl w-full sm:w-2/3 h-[20px]"></div>
        <div className="bg-gray-200 rounded-xl w-full sm:w-2/3 h-[20px]"></div>
      </ul>
      <hr />
      <div id="about" className="flex flex-col gap-3">
        <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[30px]"></div>
        <div className="text-gray-700 [&>*]:py-2">
          <div id="coat-length">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[20px]"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[30px]"></div>
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[20px]"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[30px]"></div>
            <div className="flex gap-3 items-center justify-center md:justify-start">
              <div className="bg-gray-200 rounded-xl w-full sm:w-2/3 h-[20px]"></div>
              <div className="bg-gray-200 rounded-xl w-full sm:w-2/3 h-[20px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[30px]"></div>
            <div className="flex gap-3 items-center justify-center md:justify-start">
              <div className="bg-gray-200 rounded-xl w-full sm:w-2/3 h-[20px]"></div>
              <div className="bg-gray-200 rounded-xl w-full sm:w-2/3 h-[20px]"></div>
              <div className="bg-gray-200 rounded-xl w-full sm:w-2/3 h-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
      <>
        <hr />
        <div className=" flex flex-col gap-2">
          <div className="bg-gray-200 rounded-xl sm:w-2/3 h-[30px]"></div>
          <div className="bg-gray-200 rounded-xl w-full h-[50px]"></div>
        </div>
      </>
    </Card>
  )
}

function LoadingSidebar() {
  return (
    <div className="col-span-6 md:col-span-2 flex flex-col gap-6 justify-around">
      <LoadingPurpleCard />
      <LoadingRescuerCard />
    </div>
  )
}

function LoadingPurpleCard() {
  return (
    <Card className="p-6 justify-center text-center flex flex-col gap-3">
      <div className="bg-gray-200 rounded-xl w-full h-[50px]"></div>
      <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
      <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
        <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
      </div>
    </Card>
  )
}

function LoadingRescuerCard() {
  return (
    <Card className="p-6 text-center flex flex-col gap-3 justify-center relative">
      <div className="w-full flex justify-center bg-gray-200 rounded-xl">
        <Image
          src={paw}
          width="100"
          height={100}
          alt="paw placeholder loading image"
        />
      </div>
      <div className="bg-gray-200 rounded-xl w-full h-[50px]"></div>
      <div
        id="contact-info"
        className="flex gap-6 flex-col text-base md:text-xs lg:text-base"
      >
        <div id="address" className="flex gap-3">
          <ul className="flex flex-col gap-1 w-full">
            <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
            <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
            <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
            <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
          </ul>
        </div>
        <hr />
        <>
          <div id="email" className="flex gap-3">
            <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
          </div>
          <hr />
        </>
        <div id="phone" className="flex gap-3">
          <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
        </div>
      </div>
    </Card>
  )
}

export function LoadingHomeAllPets() {
  return (
    <div className="flex justify-center items-center animate-pulse">
      <Container className="flex flex-col gap-3">
        <h3 className="text-center text-violet-700 text-4xl">
          Pets Available for Adoption
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <LoadingSingleDogCard />
          <LoadingSingleDogCard />
          <LoadingSingleDogCard />
          <LoadingSingleDogCard />
        </div>
      </Container>
    </div>
  )
}

export function LoadingSingleDogCard() {
  return (
    <Card className="animate-pulse justify-center text-center flex flex-col gap-3">
      <div className="min-h-[250px] rounded-t bg-cover bg-no-repeat bg-center flex flex-col justify-end">
        <div className="w-full bg-white px-3 py-5 rounded-t-[100%] text-xl text-violet-700">
          <div className="bg-gray-200 rounded-xl w-full h-[25px]"></div>
        </div>
      </div>
    </Card>
  )
}
